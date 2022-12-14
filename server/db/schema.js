const db = require('./db.js');

// NOTE: Tables which have foreign keys must be created after the table they reference
const tables = [
  {
    // Table example #1
    name: 'users',
    fields: [
      'id SERIAL PRIMARY KEY',
      'username VARCHAR(60)'
    ],
    indexes: []
  },
  {
    // Table example #2
    name: 'tweets',
    fields: [
      'id SERIAL PRIMARY KEY',
      'user_id INTEGER',
      'tweet VARCHAR(280)',
      'likes INTEGER DEFAULT 0',
      'CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(id)'
    ],
    indexes: ['user_id']
  }
];

// tables - list of tables to create
// table - Object with keys:
// table.name - Name of table
// table.fields - Fields / constraints with properties
// table.indexes - Indexes to create on provided fields
module.exports.setupTables = async () => {
  for (table of tables) {
    let fieldsParsed = '';
    let indexPromises = [];
    for (let i = 0; i < table.fields.length; i++) {
      fieldsParsed += table.fields[i];
      if (i < table.fields.length - 1) {
        fieldsParsed += ', ';
      }
    }
    console.log(`CREATE TABLE IF NOT EXISTS ${table.name} (${fieldsParsed});`); // DEBUG
    await db.query(`
      CREATE TABLE IF NOT EXISTS ${table.name} (${fieldsParsed})
    `)
      .catch((error) => error);
    for (let index of table.indexes) {
      indexPromises.push(
        db.query(`
          CREATE INDEX ${table.name}_${index}_idx ON ${table.name} (${index})
        `)
          .catch((error) => error)
      );
    }
  }
  return Promise.all(indexPromises);
};

// Drops all tables with public schema, re-creates public schema
// NOTE: Relies on table to not be using a different schema (public is default)
module.exports.dropTables = () => {
  return query('DROP SCHEMA public CASCADE')
    .then(() => query('CREATE SCHEMA public'))
    .catch((error) => error);
};
