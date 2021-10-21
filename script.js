const menu = document.querySelector('.mobile');
const menuItems = document.querySelectorAll('.nav-tag');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const hamb = document.querySelector('.hamb');
closeIcon.style.display = 'none';
function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
  }
}
hamburger.addEventListener('click', toggleMenu);
hamb.addEventListener('click', toggleMenu);
menuItems.forEach(
  (menuItem) => {
    menuItem.addEventListener('click', toggleMenu);
  },
);

// teachers or featured speakers
const data = [
  {
    image: 'images/pe-t.png',
    teacherName: 'Ms. Pam',
    subject: 'Level 1 Physical Science',
    about: 'Joined ABS in January 2021. Besides teaching he enjoys playing the piano',
  },
  {
    image: 'images/math-t.png',
    teacherName: 'Ms. Jane',
    subject: 'Level 1 Geography teacher',
    about: 'Joined ABS in January 2021. Besides teaching he enjoys playing the piano',
  },
  {
    image: 'images/geog-t.png',
    teacherName: 'Ms. Cathy',
    subject: 'Level 1 Physical Science',
    about: 'Joined ABS in January 2021. Besides teaching he enjoys playing the piano',
  },
  {
    image: 'images/art-t.png',
    teacherName: 'Ms. Molly',
    subject: 'Level 1 Physical Science',
    about: 'Joined ABS in January 2021. Besides teaching he enjoys playing the piano',
  },
];

const mainCard = document.querySelector('.desktop-all-staff');
for (let i = 0; i < data.length; i += 1) {
  const teacher = data[i];
  mainCard.innerHTML += `
        <div class="staff-members">
            <img class="science-t-pic" src="${teacher.image}" alt="science teacher">
                <ul class="science-teacher-ul">
                    <li class="name">${teacher.teacherName}</li>
                    <li class="subject">${teacher.subject}</li>
                    <li class="hr"><hr></li>
                    <li class="about">${teacher.about}</li>
                </ul>
        </div>
    `;
}
