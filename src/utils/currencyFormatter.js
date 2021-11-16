function toComaNbr(nbr) {
   return nbr.toLocaleString('en-US', {maximumFractionDigits:2});
}
// function toComaNbr(nbr) {
//   nbr = Math.round(nbr);
//   nbr = nbr.toString();
//   let nbrPiece, tabNbr = [];
//   for (let i=nbr.length; i > Math.floor(nbr.length/3); i-=3) {
//      nbrPiece = nbr.substring(i-3, i);
//      tabNbr.push(nbrPiece);
//   }
//    nbrPiece = nbr.substring(0, (nbr.length % 3));
//    tabNbr.push(nbrPiece);
//    tabNbr = tabNbr.reverse().join(',');
//    return tabNbr;
// }

export default toComaNbr;

