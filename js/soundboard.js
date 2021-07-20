var tables = {
  'M1': 'Male One / Мужчина Один',
  'M2': 'Male Two / Мужчина Два',
  'F1': 'Female One / Женщина Один',
  'F2': 'Female Two / Женщина Два'
};

for (var i in tables) {
  document.write('<table border="1">');
    document.write('<tr>');
      document.write('<th colspan="8">Unreal Tournament taunts / Подколки в Unreal Tournament</th>');
    document.write('</tr>');
    document.write('<tr>');
      document.write(`<th colspan="8">${tables[i]}</th>`);
    document.write('</tr>');
    document.write('<tr>');
      document.write('<th width="30" rowspan="2">№</th>');
      document.write('<th width="40" rowspan="2">Play</th>');
      document.write('<th colspan="2">Оригинал</th>');
      document.write('<th colspan="2">Локализация "Русского проекта"</th>');
    document.write('</tr>');
    document.write('<tr>');
      document.write('<th width="150">Голос</th>');
      document.write('<th width="150">Текст в чате</th>');
      document.write('<th width="160">Голос</th>');
      document.write('<th width="160">Текст в чате</th>');
    document.write('</tr>');
    for (var j = 0; j < taunts[i].length; j++) {
      document.write('<tr>');
        document.write(`<td>${j + 1}</td>`);
        document.write(`<td align="center" class="play_button" onclick="play_sound('${i}', '${('0' + (j + 1)).slice(-2)}')">🔊</td>`);
        document.write(`<td align="center" colspan="2">${taunts[i][j]['original']}</td>`);
        if (typeof(taunts[i][j]['ru']) == 'string') {
          document.write(`<td align="center" colspan="2">${taunts[i][j]['ru']}</td>`);
        }
        else if (typeof(taunts[i][j]['ru']) == 'object') {
          document.write(`<td>${taunts[i][j]['ru'][0]}</td>`);
          document.write(`<td>${taunts[i][j]['ru'][1]}</td>`);
        }
      document.write('</tr>');
    }
  document.write('</table>');

  if (i != 'F2') {
    document.write('<br>');
  }
}
