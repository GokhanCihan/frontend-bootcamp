import React from "react";

function Footer({showFilter, setShowFilter, removeCompleted}) {
  return (
    <footer className="footer">
      <div className="filters">
	      <span 
          onClick={() => setShowFilter("all")}
          className={showFilter === "all" ? "selected": ""} 
        >
          All
        </span>
	      <span
          onClick={() => setShowFilter("active")}
          className={showFilter === "active" ? "selected" : ""}
        >
          Active
        </span>
	      <span
          onClick={() => setShowFilter("completed")}
          className={showFilter === "completed" ? "selected" : ""}
        >
          Completed
        </span>
	    </div>
      <div className="btn-container">
	      <button 
          className="clear-completed"
          onClick={() => removeCompleted()}
        >
          Clear completed
        </button>
      </div>
    </footer>
  )
}

export default Footer