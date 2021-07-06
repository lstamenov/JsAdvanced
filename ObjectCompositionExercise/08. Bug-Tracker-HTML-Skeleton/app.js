function solve () {
    // • report(author, description, reproducible, severity) - create a new bug report and store it.
    // The ID is assigned automatically to the next available number and the status defaults to 'Open'
    // • setStatus(id, newStatus) - change the status of a bug registered in the system to newStatus by given ID
    // • remove(id) - delete a bug report by given ID
    // • sort(method) - change the order in which bug reports are displayed on the webpage. 
    // The method argument is a string and can be either 'author', 'severity' or 'ID'.
    // Always sort in ascending order (default behavior for alphabetical sort). The default sorting method is by 'ID'.
    // • output(selector) - set the HTML element inside which the result is to be displayed to selector

    class Bug {
        id;
        author;
        description;
        reproducible;
        severity;
        status;


        constructor(id, author, description, reproducible, severity, status) {
            this.id = id;
            this.author = author;
            this.description = description;
            this.reproducible = reproducible;
            this.severity = severity;
            this.status = status;
        }

        setStatus(newStatus){
            this.status = newStatus;
        }
    }

    class BugReporter {
        bugsElements;
        static BUG_ID;

        constructor() {
            this.bugsElements = [];
        }

        report(author, description, reproducible, severity, status){
            let bug = new Bug(BugReporter.BUG_ID++,
                author, description, reproducible,
                severity, status);
            this.bugsElements.push(bug);
        }

        setStatus(id, newStatus){
            let bugIndex = this.getBugById(id);
            if (bugIndex){
                this.bugsElements[bugIndex].setStatus(newStatus);
            }
        }

        remove(id){
            let bugIndex = this.getBugById(id);
            if (bugIndex){
                this.bugsElements[bugIndex].splice(id, 1);
            }
        }

        sort(property){
            property = property.toLowerCase();
            this.bugsElements.sort(function (a, b) {
                if (a[property] > b[property]){
                    return 1;
                }else {
                    return -1;
                }
            });
        }

        output(number, id){
            let bugIndex = this.getBugById(id);
            let bug = this.bugsElements[bugIndex];
            let reportDiv = document.createElement('div');
            reportDiv.setAttribute('class', 'report');
            let bodyDiv = document.createElement('div');
            bodyDiv.setAttribute('class', 'body');
            let desc = document.createElement('p');
            desc.innerHTML = 'Description';
            bodyDiv.appendChild(desc);
            reportDiv.appendChild(bodyDiv);
            let divTitle = document.createElement('div');
            let spanAuthor = document.createElement('span');
            spanAuthor.setAttribute('class', 'author');
            spanAuthor.innerHTML = `Submitted by: ${bug.author}`;
            divTitle.appendChild(spanAuthor);
            let spanStatus = document.createElement('span');
            spanStatus.setAttribute('class', 'status');
            spanStatus.innerHTML = bug.status;
            divTitle.appendChild(spanStatus);
            reportDiv.appendChild(divTitle);

            let contentElement = document.getElementById('content');
            contentElement.appendChild(reportDiv);
        }

        getBugById(id){
            for (let i = 0; i < this.bugsElements.length; i++) {
                if (this.bugsElements[i].id === id){
                    return i;
                }
            }
            return undefined;
        }
    }

    let reporter = new BugReporter();
    reporter.report('Pesho', 'Typ e', false, 12, 'Open');
    reporter.report('Gosho', 'Umen e', true, 5, 'Closed');

    reporter.output(0, 0);
}