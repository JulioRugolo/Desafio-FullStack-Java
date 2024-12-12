const mysql = require('mysql2/promise');

async function waitForMysql() {
  const RETRY_DELAY = 2000; // 2 segundos
  const MAX_RETRIES = 10;

  let retries = 0;

  while (retries < MAX_RETRIES) {
    try {
      const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'totvs@123'
      });

      console.log('MySQL está pronto!');
      await connection.end();
      process.exit(0);
    } catch (err) {
      console.log(`Aguardando MySQL estar pronto... Tentativa ${retries + 1}`);
      retries++;
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
    }
  }

  console.error('MySQL não está pronto após várias tentativas.');
  process.exit(1);
}

waitForMysql();
