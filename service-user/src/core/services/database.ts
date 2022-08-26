import knex from "knex";;
import { database } from "../../config";

const db = knex(database);

export default db;