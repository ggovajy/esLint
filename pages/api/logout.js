export default (req, res) => {
  res.setHeader('Set-Cookie', 'a_name=Mike;Max-Age=0; httpOnly,Secure');
  res.statusCode = 200;
  res.json({ message: 'ok' });
};
