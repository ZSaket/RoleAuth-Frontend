import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../services/AuthContext';

const FloatingDashboardBar = ({ buttons }) => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <StyledWrapper>
      <div className="floating-dashboard">
        <div className="input">
          {buttons.map((button, index) => (
            <button key={index} className="value">
              {button}
            </button>
          ))}
          <button className="value logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .floating-dashboard {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    background-color: #0d1117;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  .input {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }

  .value {
    background-color: transparent;
    border: none;
    padding: 10px 15px;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .value:hover {
    background-color: #21262d;
  }

  .logout {
    color: red;
    font-weight: bold;
  }

  .logout:hover {
    background-color: #b22222;
  }
`;

export default FloatingDashboardBar;
