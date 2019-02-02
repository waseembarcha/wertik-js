export default `
	type Profile {
		_id: String
		id: Int
		user: User
		description: String
		successMessage: String
		successMessageType: String
		errors: [String]
		statusCode: String
		statusCodeNumber: Int
		created_by: User
		created_at: String
		updated_at: String
	}
`;