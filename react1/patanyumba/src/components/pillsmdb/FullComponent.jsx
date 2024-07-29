import React, { useState } from 'react';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';

const FullComponent = () => {
    const [activeTab, setActiveTab] = useState('login');

    return (
        <div>
            {/* Pills navs */}
            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                    <a
                        className={`nav-link ${activeTab === 'login' ? 'active' : ''}`}
                        id="tab-login"
                        onClick={() => setActiveTab('login')}
                        role="tab"
                        aria-controls="pills-login"
                        aria-selected={activeTab === 'login'}
                    >
                        Login
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a
                        className={`nav-link ${activeTab === 'register' ? 'active' : ''}`}
                        id="tab-register"
                        onClick={() => setActiveTab('register')}
                        role="tab"
                        aria-controls="pills-register"
                        aria-selected={activeTab === 'register'}
                    >
                        Register
                    </a>
                </li>
            </ul>
            {/* Pills navs */}

            {/* Pills content */}
            <div className="tab-content">
                {activeTab === 'login' && (
                    <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                        <LoginComponent />
                    </div>
                )}
                {activeTab === 'register' && (
                    <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                        <RegisterComponent />
                    </div>
                )}
            </div>
            {/* Pills content */}
        </div>
    );
};

export default FullComponent;