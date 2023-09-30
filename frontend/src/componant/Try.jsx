import React, { useState } from 'react'
import { FullScreenViewer } from './FullScreenViewer';

export const Try = () => {
    const [fullScreen, setFullScreen] = useState(false);

    // const toggleFullScreen = () => {
    //   setFullScreen(!fullScreen);
    // };
  
    return (
      <div className="App">
        {/* <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1b6c6d9b-1f6b-450f-885d-ded5a8715f30/dga8dce-0448f354-5472-4601-9fcd-42e0c8f33dfc.png/v1/fill/w_979,h_816,q_70,strp/you_can_make_a_change_by_owlenne_dga8dce-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU0IiwicGF0aCI6IlwvZlwvMWI2YzZkOWItMWY2Yi00NTBmLTg4NWQtZGVkNWE4NzE1ZjMwXC9kZ2E4ZGNlLTA0NDhmMzU0LTU0NzItNDYwMS05ZmNkLTQyZTBjOGYzM2RmYy5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.17_geP3BBI4nCud_4zVBjB3MjaSeSBop1P2ATH8XKf4"
          alt="mage"
          onClick={toggleFullScreen}
        />
        {fullScreen && (
          <FullScreenViewer
            imageUrl="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1b6c6d9b-1f6b-450f-885d-ded5a8715f30/dga8dce-0448f354-5472-4601-9fcd-42e0c8f33dfc.png/v1/fill/w_979,h_816,q_70,strp/you_can_make_a_change_by_owlenne_dga8dce-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU0IiwicGF0aCI6IlwvZlwvMWI2YzZkOWItMWY2Yi00NTBmLTg4NWQtZGVkNWE4NzE1ZjMwXC9kZ2E4ZGNlLTA0NDhmMzU0LTU0NzItNDYwMS05ZmNkLTQyZTBjOGYzM2RmYy5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.17_geP3BBI4nCud_4zVBjB3MjaSeSBop1P2ATH8XKf4"
            onClose={toggleFullScreen}
          />
        )} */}
      </div>
    );
}
