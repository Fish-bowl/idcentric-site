import React from 'react'
import { Segment, Card, Image, Container, Divider } from 'semantic-ui-react'

class Music extends React.Component {
  render() {
    return (
      <Container>
        <Segment inverted>
            {/* <Card 
              image='client/src/content/mexicoCityMe.jpg'
              header='idcentric'
              meta='musician'
              description='Check out my music on soundcloud'
              href='https://soundcloud.com/max-whitaker-807575387'
              target='_blank'
            /> */}
          <Card>
            {/* <Image size='small' src={require('/Users/max/Desktop/petProjects/Idcentric/client/src/content/mexicoCityMe.jpg')} wrapped ui='true' /> */}
            <Card.Content>
              <Card.Header>idcentric</Card.Header>
              <Card.Meta>musician</Card.Meta>
              <Card.Description>Check out my music on soundcloud!</Card.Description>
            </Card.Content>
          </Card>
        </Segment>
        <Segment inverted>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/663020300&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          <Divider/>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/663691019&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          <Divider />
          <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/663151604&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          <Divider/>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/656509187&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          <Divider />
          <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/459646953&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        </Segment>
      </Container>
    )
  }
}

export default Music
