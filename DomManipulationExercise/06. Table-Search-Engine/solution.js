function solve() {
   let searchButton = document.getElementById('searchBtn');
   let searchInput = document.getElementById('searchField');

   let studentsElement = document.getElementsByTagName('tbody')[0];
   let studentsDetails = studentsElement.children;

    let findStudents = () => {
        let input = searchInput.value;
        searchInput.value = '';

        for (let i = 0; i < studentsDetails.length; i++) {
            studentsDetails[i].removeAttribute('class');
        }

        for (let i = 0; i < studentsDetails.length; i++) {
            let studentDetails = studentsDetails[i].children;
            for (let j = 0; j < studentDetails.length; j++) {

                if (studentDetails[j].innerHTML.toLowerCase().includes(input)){
                    studentsDetails[i].setAttribute('class', 'select');
                }
            }
        }
    }

    searchButton.addEventListener('click', findStudents)
}