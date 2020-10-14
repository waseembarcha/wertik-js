import getRequestedFieldsFromResolverInfo from "./../../helpers/getRequestedFieldsFromResolverInfo";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

export default {
  name: "RolePermission",
  graphql: {
    crud: {
      query: {
        generate: true,
        operations: "*",
      },
      mutation: {
        generate: true,
        operations: "*",
      },
    },
    schema: `
      type RolePermission {
        _id: String
        id: Int
        name: String
        role: Role
        role_id: Int
        permission: Permission
        permission_id: Int
        created_by: User
        created_by_id: Int
        created_at: String
        updated_at: String
      }
      input RolePermissionInput {
        _id: String
        id: Int
        name: String
        role_id: Int
        permission_id: Int
        created_by_id: Int
      }
    `,
    customResolvers: {},
    mutation: {
      schema: ``,
      resolvers: {},
    },
    query: {
      schema: ``,
      resolvers: {},
    },
  },
  restApi: {},
  database: {
    selectIgnoreFields: ["permission", "role","created_by"],
    relationships: {
      oneToOne: {
        Permission: {
          relationColumn: "permission_id",
          graphqlName: "permission",
          foreignKey: "id",
        },
        Role: {
          relationColumn: "role_id",
          graphqlName: "role",
          foreignKey: "id",
        },
        User: {
          graphqlName: "created_by",
          foreignKey: "id",
          relationColumn: "created_by_id",
        },
      },
    },
    sql: {
      tableName: "rolePermission",
      fields: {
        name: {
          type: "STRING",
        },
        role_id: {
          type: "INTEGER",
        },
        permission_id: {
          type: "INTEGER",
        },
        is_deleted: {
          type: "INTEGER",
        },
        created_by_id: {
          type: "INTEGER",
        },
      },
    },
    mongodb: {
      tableName: "rolePermission",
      schema: {
        name: {type: String},
        role: { type: Schema.Types.ObjectId, ref: "role" },
        role_id: {type: Number},
        permission: { type: Schema.Types.ObjectId, ref: "permission" },
        permission_id: {type: Number},
        created_by: { type: Schema.Types.ObjectId, ref: "user" },
        created_by_id: {type: Number},
        created_at: {type: String},
        updated_at: {type: String},
      },
    },
  },
};
