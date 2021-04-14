class Tables {
  init(connection) {
    this.connection = connection;
    this.createServices();
  };

  createServices() {
    const sql = 'CREATE TABLE IF NOT EXISTS Services (id int NOT NULL AUTO_INCREMENT, client varchar(50) NOT NULL, pet varchar(20), service varchar(20) NOT NULL, date datetime NOT NULL, createdAt datetime NOT NULL, status varchar(20) NOT NULL, comment text, PRIMARY KEY(id))';
    this.connection.query(sql, error => {
      if (error) {
        console.log(error);
      } else {
        console.log('tabela \'Services\' criada com sucesso');
      };
    });
  };
};

module.exports = new Tables;