const quotes = [
  "Kao da sopran srca mog pjeva tvoje ime u svakoj tišini.",
  "U tvom pogledu, sve arije pronalaze svoj kraj.",
  "Ti si melodija koju nijedna opera ne može otpjevati do kraja.",
  "Kada šutiš, svijet se čini kao najnježnija partitura.",
  "Hana, ti si moja jedina scena i posljednji aplauz."
];

function newQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById('quoteBox').innerHTML = `<p class="quote">${quotes[random]}</p>`;
}
