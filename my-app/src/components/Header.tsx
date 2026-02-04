import './header.css';

function Header() {
  return (
    <>
      <header className="header">
        <img
          src="/task-management-logo.png"
          alt="Task Management Logo"
        />
        <h1>Easy Task</h1>
        <h2>Enterprise-level task management without friction</h2>
      </header>
    </>
  );
}

export default Header;
