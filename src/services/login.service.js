import "dotenv/config";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import prisma from "../config/db.js";

const JWT_SECRET = process.env.JWT_SECRET;

async function createLogin(data) {
	const { login, password, permission } = data;

	const saltRounds = 10;
	const passwordCripto = await bcrypt.hash(password, saltRounds);

	return prisma.login.create({
		data: {
			login: login,
			password: passwordCripto,
			permission: permission,
		},
	});
}

async function getAllLogin() {
	return prisma.login.findMany();
}

async function authLogin(login, passwordDigitaded) {
	const usuario = await prisma.login.findUnique({
		where: { login: login },
	});

	if (!usuario) {
		throw new Error("Usuário ou senha incorretos.");
	}

	const senhaCorreta = await bcrypt.compare(passwordDigitaded, usuario.password);

	if (!senhaCorreta) {
		throw new Error("Usuário ou senha incorretos.");
	}

	const token = jwt.sign({ id: usuario.id, permission: usuario.permission }, JWT_SECRET, {
		expiresIn: "1d",
	});
	return {
		user: {
			id: usuario.id,
			login: usuario.login,
			permission: usuario.permission,
		},
		token,
	};
}

async function updateLogin(id, data) {
	return prisma.login.update({
		where: { id: Number(id) },
		data,
	});
}

async function deleteLogin(id) {
	return prisma.login.delete({ where: { id: Number(id) } });
}

export default {
	createLogin,
	getAllLogin,
	updateLogin,
	deleteLogin,
	authLogin,
};
