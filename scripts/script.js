function generateGroups() {
    var studentList = document.getElementById('studentList').value.split('\n').map(function(item) {
      return item.trim();
    }).filter(Boolean);

    var numStudents = parseInt(document.getElementById('numStudents').value);

    if (studentList.length === 0 || isNaN(numStudents) || numStudents <= 0) {
      alert('Por favor ingresa una lista de estudiantes y un número válido de grupos.');
      return;
    }

    var shuffledStudents = shuffleArray(studentList);
    var numGroups = parseInt(studentList.length/numStudents);
    console.log(numGroups);
    var groups = [];

    for (var i = 0; i < numGroups; i++) {
      groups.push([]);
    }

    for (var j = 0; j < shuffledStudents.length; j++) {
      var groupIndex = j % numGroups;
      groups[groupIndex].push(shuffledStudents[j]);
    }

    displayGroups(groups);
  }

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function displayGroups(groups) {
    var groupOutput = document.getElementById('groupOutput');
    groupOutput.innerHTML = '';

    for (var i = 0; i < groups.length; i++) {
      var groupDiv = document.createElement('div');
      groupDiv.classList.add('alert', 'alert-primary');
      groupDiv.innerHTML = '<h4>Grupo ' + (i + 1) + '</h4><ul>';

      for (var j = 0; j < groups[i].length; j++) {
        groupDiv.innerHTML += '<li>' + groups[i][j] + '</li>';
      }

      groupDiv.innerHTML += '</ul>';
      groupOutput.appendChild(groupDiv);
    }
  }