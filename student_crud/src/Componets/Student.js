import React from "react";
import StudentsInfo from "./StudentsInfo";

const Student = ({ items, onDelete, onAllSave }) => {
  return (
    <>
      {items.length === 0 ? (
        <div className="alert alert-warning mb-0" role="alert">
          <h2 className="text-center">NO Students</h2>
        </div>
      ) : (
        <div className="container mt-5">
          {/* {items.map((item) => (
            <StudentsInfo item={item} key={item.id} onDelete={onDelete} onUpperCase={onUpperCase}/>
          ))} */}
          {/* {items.map(item=>(
      <StudentsInfo item={item} key={item.id} onDelete={onDelete} onUpperCase={onUpperCase} />
      ))} */}
          {/* {items.map((item) => {        
        return <StudentsInfo item={item} key={item.id} onDelete={onDelete} onUpperCase={onUpperCase}/>;
      })} */}
          {items.map((item) => {
            return (
              <StudentsInfo
                item={item}
                key={item.id}
                onDelete={onDelete}
                onAllSave={onAllSave}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Student;
