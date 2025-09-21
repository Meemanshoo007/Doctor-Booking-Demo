import NavbarSecondary from '../nav_secondary/nav_secondary';

function Nav() {
  return (
   <>
   
   <div className='fixed-top'>
    
<nav class="navbar px-4 ">
    <ul class="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Centres & Specialities</a></li>
        <li><a href="#">Doctors</a></li>
        <li><a href="#">Pay Online</a></li>
        <li><a href="#">Robotic Surgery</a></li>
        <li><a href="#">Patient Care</a></li>
        <li><a href="#">Locations</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Wellness Zone</a></li>
    </ul>

    <div class="navbar-right">
        <div class="language-selector">
            <select>
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
            </select>
        </div>
        <div class="hamburger-menu">&#9776;</div>
    </div>
</nav>
    <NavbarSecondary/>
   </div>


   </>
  );
}

export default Nav;