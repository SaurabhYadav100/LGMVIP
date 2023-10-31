const registrationForm = document.getElementById('registrationForm');
const outputData = document.getElementById('outputData');

const enrolledStudents = []; // Array to store enrolled students' data

registrationForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const student = {
        fullName,
        email,
        number
    };
    enrolledStudents.push(student); 
    outputData.innerHTML = ''; // Clear the existing content
    enrolledStudents.forEach((student, index) => {
        const studentInfo = document.createElement('outputData');
       
        studentInfo.innerHTML = `
            <p><strong>Reg. No.:</strong> ${student.number}</p>
            <p><strong>Name:</strong> ${student.fullName}</p>
            <p><strong>Email:</strong> ${student.email}</p>
       `;
        outputData.appendChild(studentInfo);
    });
});
