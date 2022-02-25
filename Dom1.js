const paragraph = document.querySelector('p');
paragraph.innerHTML = paragraph.innerText
  .split('')
  .map(word => word.length > 8 ? `<pan style="background-color: blue">${word}</span>` : word)
  .join('');
const link = document.createElement('a');
link.herf = 'https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html';
link.innerText = 'Text generated from Forcem Ipsum';
document.body.appendChild(link);
paragraph.innerHTML = paragraph.innerHTML
  .split(/\.[^\.|<]/)
  .join('.</p><p>') + '</p>';
const wordCount = paragraph.innerText.split(' ').length;
const wordCountElm = document.createElement('div');
wordCountElm.innerText = `&{wordCount} words`;
document.body.insertBefore(wordCountElm, paragraph);
Array.from(document.querySelectorAll('p'))
  .forEach(p => {
      p.innerHTML = p.innerHTML
        .replace(/\?/g, '🤔')
        .replace(/\!/g, '😲');
  })