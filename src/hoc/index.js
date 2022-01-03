export const checkUserType = (currentUser) => {
	switch (currentUser.type) {
		case "admin":
			return "admin";
		case "customer":
			return "customer";
		case "trainer":
			return "trainer";
		case "gym":
			return "gym";
		default:
			return "";
	}
};
