export function Profile() {
  return (
    <div>
      <h1>Profile Card</h1>
      <ProfileCard
        name="Alice"
        age={30}
        greeting={
          <div>
            <strong>Hi alice, have a wonderful day!</strong>
          </div>
        }
      >
        <p>Hobbies: Reading, hiking</p>
        <button>Contact</button>
      </ProfileCard>
      <ProfileCard
        name="Bob"
        age={25}
        greeting={
          <div>
            <strong>Hi Bob, keep up the great work!</strong>
          </div>
        }
      >
        <p>Hobbies: Gaming, Cooking</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
  );
}

function ProfileCard(props) {
  const { name, age, greeting, children } = props;

  return (
    <>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>{greeting}</p>
      <div>{children}</div>
    </>
  );
}
