import React from "react";
import { Grid, Segment, Header, Image } from "semantic-ui-react";

const UserDetailedPhoto = ({ photos, profile }) => {
  let filterPhotos;
  if (photos) {
    filterPhotos = photos.filter(photo => {
      return photo.url !== profile.photoURL;
    });
  }
  return (
    <Grid.Column width={12}>
      <Segment attached>
        <Header icon="image" content="Фото" />
        <Image.Group size="small">
          {photos &&
            filterPhotos.map(photo => <Image key={photo.id} src={photo.url} />)}
        </Image.Group>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedPhoto;
