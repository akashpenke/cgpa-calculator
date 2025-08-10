function generateInputs() {
  const count = parseInt(document.getElementById('numSubjects').value);
  const container = document.getElementById('subjectInputs');
  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    container.innerHTML += `
      <div class="input-group">
        <input type="number" step="0.01" placeholder="Grade for Subject ${i + 1}" required class="grade"/>
        <input type="number" step="0.01" placeholder="Credits for Subject ${i + 1}" required class="credit"/>
      </div>
    `;
  }
}

document.getElementById('cgpaForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const grades = Array.from(document.getElementsByClassName('grade')).map(input => parseFloat(input.value));
  const credits = Array.from(document.getElementsByClassName('credit')).map(input => parseFloat(input.value));

  let totalCredits = 0, weightedSum = 0;
  for (let i = 0; i < grades.length; i++) {
    totalCredits += credits[i];
    weightedSum += grades[i] * credits[i];
  }

  const cgpa = weightedSum / totalCredits;
  const resultDiv = document.getElementById('result');
  resultDiv.innerText = `CGPA YOU GOT IS: ${cgpa.toFixed(2)}`;
  
  // Add animation
  resultDiv.classList.add('show');
});
