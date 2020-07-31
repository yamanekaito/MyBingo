'use strict'
{
  function createColumn(col) {
    const column = [];
    const numbers = [];
    for (let i=0;i < 15;i++) {
      numbers[i] = i + 1 + col*15;
    }
    for (let i=0;i < 5;i++) {
      column[i] = numbers.splice(Math.random() * numbers.length,1)[0];
    }
    return column;
  }

  function createColumns() {
    const columns = [];
    for (let i=0;i< 5;i++) {
      columns[i] = createColumn(i);
    }
    columns[2][2] = 'free';
    return columns;
  }


  function renderBingo(columns) {
    const tbody = document.querySelector('tbody');
    for (let i=0;i<5;i++) {
      const tr = document.createElement('tr');
      for(let j=0;j<5;j++) {
        const td = document.createElement('td');
        td.textContent = columns[j][i];
        if(td.textContent === 'free') {
          td.classList.add('active')
        }else {
          td.addEventListener('click',() => {
            td.classList.toggle('active');
          })
        }
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }

  }

  const columns = createColumns();
  renderBingo(columns);





}