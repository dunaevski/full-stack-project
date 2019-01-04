export const userDetailedQuery = ({ auth, userUid }) => {
  if (userUid !== null) {
    return [
      {
        collection: "users",
        doc: userUid,
        storeAs: "profile"
      },
      {
        collection: "users",
        doc: userUid,
        subcollections: [{ collection: "photos" }],
        storeAs: "photos"
      }
    ];
  } else {
    return [
      {
        collection: "users",
        doc: auth.uid,
        subcollections: [{ collection: "photos" }],
        storeAs: "photos"
      }
    ];
  }
};

export const peopleFollowQuery = ({ auth, match }) => {
  return [
    {
      collection: "users",
      doc: auth.uid,
      subcollections: [{ collection: "followers" }],
      storeAs: "followers"
    },
    {
      collection: "users",
      doc: auth.uid,
      subcollections: [{ collection: "following" }],
      storeAs: "following"
    },
    { 
      collection: 'users',
      doc: auth.uid,
      subcollections: [{collection: 'following', doc: match.params.id}],
      storeAs: 'isFollowing'
    }
  ];
};
