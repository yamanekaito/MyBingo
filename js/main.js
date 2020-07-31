'use strict'
{
  function createColumn(col) {
    const column = [];
    const numbers = [];
    for (let i=0;i < 15;i++) {
      numbers[i] = i + col*15;
    }
    for (let i=0;i < 5;i++) {
      column[i] = numbers.splice(Math.random() * numbers.length,1)[0];
    }
    return column;
  }

  const columns = [];
  for (let i=0;i< 5;i++) {
    columns[i] = createColumn(i);
  }
  columns[2][2] = 'free';
  console.log(columns);


  const tbody = document.querySelector('tbody');
  for (let i=0;i<5;i++) {
    const tr = document.createElement('tr');
    for(let j=0;j<5;j++) {
      const td = document.createElement('td');
      td.textContent = columns[j][i];
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }


}