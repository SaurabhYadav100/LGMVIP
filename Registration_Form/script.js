/*const registrationForm = document.getElementById('registrationForm');
        const output = document.getElementById('output');
        const outputFullName = document.getElementById('outputFullName');
        const outputMobile = document.getElementById('outputMobile');
        const outputEmail = document.getElementById('outputEmail');
    
        registrationForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const fullName = document.getElementById('fullName').value;
            const mobile = document.getElementById('mobile').value;
            const email = document.getElementById('email').value;
            outputFullName.textContent = fullName;          
            outputMobile.textContent = mobile;
            outputEmail.textContent = email;
            output.style.display = 'block';
        });*/

      const registrationForm = document.getElementById('registrationForm');
const outputData = document.getElementById('outputData');

const enrolledStudents = []; // Array to store enrolled students' data

registrationForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;

    // Create an object to represent a student
    const student = {
        fullName,
        email,
        number
    };

    enrolledStudents.push(student); // Add the student to the array

    // Display all enrolled students' information
    outputData.innerHTML = ''; // Clear the existing content
    enrolledStudents.forEach((student, index) => {
        const studentInfo = document.createElement('outputData');
       
        studentInfo.innerHTML = `
            <p><strong>Reg. No.:</strong> ${student.number}</p>
            <p><strong>Name:</strong> ${student.fullName}</p>
            <p><strong>Email:</strong> ${student.email}</p>
            
       `;
        outputData.appendChild(studentInfo);
        //outputData.style.display='block';
    });
       //outputData.style.marginTop='50px';            
    //
   
});