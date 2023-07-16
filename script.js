var rowcount=4;
function myCreateFunction(){
    var classId = prompt("Enter your Class");
    var year = prompt("Enter year");
    var board = prompt("Enter Board/University/Institute");
    var per = prompt("Enter your percentage");
    if (classId != null) {
        var table = document.getElementById("myTable");
        var row = table.insertRow(++rowcount);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = classId.fontsize(4);
        cell2.innerHTML = year.fontsize(4);
        cell3.innerHTML = board.fontsize(4);
        cell4.innerHTML = per.fontsize(4);

    }else{
        alert("Please Enter your Class");
    }
}
function myDeleteFunction() {
    document.getElementById("myTable").deleteRow(rowcount);
    --rowcount;
}



function genPDF() {
    var doc = new jsPDF();
    doc.setFontType("bold");
    doc.setFontSize(20);
    doc.text(20, 20, document.getElementById("f_name").value + " " + document.getElementById("l_name").value);
    doc.setFontType("normal");
    doc.setFontSize(12);
    doc.text(20, 30, "Father Name: " + document.getElementById("ft_name").value);
    doc.text(20, 36, "Email: " + document.getElementById("email").value);
    doc.text(20, 42, "Address: " + document.getElementById("address").value);
    doc.text(20, 48, "Phone No: " + document.getElementById("phone").value);

    doc.setFontType("bold");
    doc.setFontSize(16);
    doc.text(20, 60, "Objective");
    doc.setFontType("normal");
    doc.setFontSize(12);
    doc.text(20, 68, document.getElementById("object").value);

    doc.setFontType("bold");
    doc.setFontSize(16);
    doc.text(20, 90, "Qualification");
    doc.setFontSize(12);

    var table = document.getElementById("myTable");
    for (var i = 1; i <= 4; i++) {
        var classId = "class" + i;
        var yearId = "year" + i;
        var buId = "bu" + i;
        var perId = "per" + i;

        var qualificationRow = table.rows[i];
        var classCell = qualificationRow.cells[0];
        var yearCell = qualificationRow.cells[1];
        var buCell = qualificationRow.cells[2];
        var perCell = qualificationRow.cells[3];

        doc.text(20, 98 + (i - 1) * 30, classCell.innerHTML);
        doc.text(50, 98 + (i - 1) * 30, document.getElementById(yearId).value);
        doc.text(100, 98 + (i - 1) * 30, document.getElementById(buId).value);
        doc.text(170, 98 + (i - 1) * 30, document.getElementById(perId).value);
    }

    doc.setFontType("bold");
    doc.setFontSize(16);
    doc.text(20, 200, "Experience");
    doc.setFontType("normal");
    doc.setFontSize(12);
    doc.text(20, 208, document.getElementById("expert").value);

    doc.setFontType("bold");
    doc.setFontSize(16);
    doc.text(20, 230, "Technical Skill");
    doc.setFontType("normal");
    doc.setFontSize(12);
    doc.text(20, 238, document.getElementById("skill").value);

    doc.save("Resume.pdf");
}
