import knex from "knex";
import { database } from "../../config";
import { attachPaginate } from 'knex-paginate';

const db = knex(database);

attachPaginate();

export default db;