import React, { useContext } from 'react'; 
import ThemeContext from '../Context/ThemeContext';
import AppTheme from '../Components/Layout/Colors';
import { Link } from 'react-router-dom';
import ThemeToggler from './Layout/TheamToggler';

const Home = () => {
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];
    return(
        <>
            <main style = {{
                padding: "1rem",
                backgroundColor: `${currentTheme.backgroundColor}`,
                color: `${currentTheme.textColor}`,        
            }}>
             
                <div className='container'>
              
                    <nav>
                        <ul>
                        <li><ThemeToggler/></li>
                        <li><Link to="/todo_class">TodoApp(ClassBase)</Link></li>
                        <li><Link to="/todo_func">TodoApp(FunctionBase)</Link></li>
                        <li><Link to="/user_list">UserList</Link></li>
                        </ul>
                    </nav>
                   
                </div>
            </main>
        </>
    );
};

export default Home;