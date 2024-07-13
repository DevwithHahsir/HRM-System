const employeeData = [
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0PDKrErulLlbJkbv5KtsCeICczdgJSyurA&s", // You can replace these with actual image URLs later
      name: "John Doe",
      department: "Engineering",
      designation: "Software Engineer",
      type: "Full-Time",
      status: "Active",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvYfzfEBG0JUuu8oWl2c2D8YGdw39Hs-E2_cqUEBqxFazPORPskD7uTNBdmSX2-F9UGU&usqp=CAU",
      name: "Jane Smith",
      department: "Marketing",
      designation: "Marketing Manager",
      type: "Full-Time",
      status: "Active",
    },
    {
      id: 3,
      img: "https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg",
      name: "Michael Lee",
      department: "Sales",
      designation: "Sales Representative",
      type: "Full-Time",
      status: "Active",
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEes0YXLnhTrbMOKYC8apm3kYA59-oiGadfhGkzTOdzxDzxLewZ6i_NT7H5S-Ag8M7vQ&usqp=CAU",
      name: "Sarah Williams",
      department: "Human Resources",
      designation: "HR Specialist",
      type: "Full-Time",
      status: "Active",
    },
    {
      id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSzGVa3SoC992I_CxrcuJt7Hms5yCufJo_aTAI2yTFSqs0_YTQ1SpjaCJxenSUUBFXdUg&usqp=CAU",
      name: "David Jones",
      department: "Finance",
      designation: "Accountant",
      type: "Full-Time",
      status: "Active",
    },
    {
      id: 6,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSzGVa3SoC992I_CxrcuJt7Hms5yCufJo_aTAI2yTFSqs0_YTQ1SpjaCJxenSUUBFXdUg&usqp=CAU",
      name: "Emily Brown",
      department: "Customer Service",
      designation: "Customer Service Representative",
      type: "Full-Time",
      status: "Active",
    },
    {
      id: 7,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSzGVa3SoC992I_CxrcuJt7Hms5yCufJo_aTAI2yTFSqs0_YTQ1SpjaCJxenSUUBFXdUg&usqp=CAU",
      name: "Robert Johnson",
      department: "IT",
      designation: "Network Administrator",
      type: "Full-Time",
      status: "Active",
    },
    {
      id: 8,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSzGVa3SoC992I_CxrcuJt7Hms5yCufJo_aTAI2yTFSqs0_YTQ1SpjaCJxenSUUBFXdUg&usqp=CAU",
      name: "Amanda Garcia",
      department: "Research & Development",
      designation: "Research Scientist",
      type: "Full-Time",
      status: "Active",
    },
    {
      id: 9,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSzGVa3SoC992I_CxrcuJt7Hms5yCufJo_aTAI2yTFSqs0_YTQ1SpjaCJxenSUUBFXdUg&usqp=CAU",
      name: "Kevin Miller",
      department: "Operations",
      designation: "Operations Manager",
      type: "Full-Time",
      status: "Active",
    },
    {
      id: 10,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSzGVa3SoC992I_CxrcuJt7Hms5yCufJo_aTAI2yTFSqs0_YTQ1SpjaCJxenSUUBFXdUg&usqp=CAU",
      name: "Jennifer Davis",
      department: "Management",
      designation: "Project Manager",
      type: "Full-Time",
      status: "Active",
    },
  ];





  


  let HeadingEmployeeContainer =document.querySelector(".list-container");

  console.log(HeadingEmployeeContainer);
  



  let string = `
  <hr>
  <div class="headings">
    <div class="HeadingEmployeeName Heading">
      <p>Employee Name</p>
    </div>
    <div class="HeadingEmployeeID Heading">
      <p>EmployeeID</p>
    </div>
    <div class="HeadingDepartment Heading">
      <p>Department</p>
    </div>
    <div class="HeadingDesignation Heading">
      <p>Designation</p>
    </div>
    <div class="HeadingType Heading">
      <p>Type</p>
    </div>
    <div class="HeadingStatus Heading">
      <p>Status</p>
    </div>
    <div class="HeadingAction Heading">
      <p>Action</p>
    </div>
  </div>
  <hr>`;

employeeData.forEach((element) => {
  string += `
    <div class="list-container">
      <div class="headingsEmployee">
        <div class="EmployeeNameImg  list">
          <img src="${element.img}" alt="">
        </div>
        <div class="EmployeeName list">
          ${element.name}
        </div>
        <div class="EmployeeID list">
          ${element.id}
        </div>
        <div class="EmployeeDepartment list">
          ${element.department}
        </div>
        <div class="Designation list">
          ${element.designation}
        </div>
        <div class="HeadingType list">
          ${element.type}
        </div>
        <div class="Status list">
          ${element.status}
        </div>
        <div class="Action list">
          <a href="http://">
            <p class="eye"><i class="fa-solid fa-eye"></i></p>
          </a>
          <a href="http://">
            <p class="pen"><i class="fa-solid fa-pen"></i></p>
          </a>
          <a href="http://">
            <p class="delete"><i class="fa-solid fa-trash"></i></p>
          </a>
        </div>
      </div>
      <hr>
    </div>
  `;
});

HeadingEmployeeContainer.innerHTML = string;
