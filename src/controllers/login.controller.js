import userLogin from "../services/login.service.js";

async function create(req, res) {
	try {
		const loginWithPermission = { ...req.body, permission: "user" };

		const login = await userLogin.createLogin(loginWithPermission);
		res.status(201).json(login);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

async function getAll(req, res) {
	try {
		const logins = await userService.getAlLogin();
		res.status(200).json(logins);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

async function update(req, res) {
	try {
		const login = await userService.updateLogin(req.params.id, req.body);
		res.status(200).json(login);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

async function remove(req, res) {
	try {
		await userService.deleteLogin(req.params.id);
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

async function logar(req, res) {
	const { login, password } = req.body;

	try {
		const resultado = await userLogin.authLogin(login, password);

		return res.status(200).json(resultado);
	} catch (error) {
		return res.status(401).json({ error: error.message });
	}
}

export default { create, getAll, update, remove, logar };
