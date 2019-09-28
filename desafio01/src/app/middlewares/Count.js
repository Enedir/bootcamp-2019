let count = 0;

export default async (req, res, next) => {
  count++;

  if (count === 1) {
    console.log('Foram feitas 1 requisição até agora.');
  } else {
    console.log(`Foram feitas ${count} requisições até agora.`);
  }

  return next();
};
