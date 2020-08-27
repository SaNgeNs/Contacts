import React, { memo, useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { useDispatch } from 'react-redux';

import toggleFavourite from 'Actions/toggleFavourite';
import EditForm from 'Components/Forms/EditForm';
import styles from './styles';

export const CardList = ({
  classes,
  cards = [],
}) => {
  const dispatch = useDispatch();
  const [ openModal, setOpenModal ] = useState(false);
  const [ editCard, setEditCard ] = useState({});
  const onClose = () => {
    setOpenModal(false);
    setEditCard({});
  };

  return (
    <div className={classes.wrap}>
      {cards.map(card => (
        <Card className={classes.card} key={card.id}>
          <CardContent>Name: {card.name}</CardContent>
          <CardContent>Phone: {card.phone}</CardContent>
          <CardContent>Email: {card.email}</CardContent>

          <CardActions>
            <IconButton
              aria-label="add to favorites"
              onClick={() => {
                dispatch(toggleFavourite({
                  id: card.id,
                  isFavourite: !card.isFavourite,
                }))
              }}
            >
              {card.isFavourite ? (
                <FavoriteIcon />
              ) : (
                <FavoriteBorder />
              )}
            </IconButton>

            <Button
              aria-label="edit card"
              variant="contained"
              onClick={() => {
                setOpenModal(!openModal);
                setEditCard(card);
              }}
            >
              Edit
            </Button>
          </CardActions>
        </Card>
      ))}

      <Modal
        className={classes.modal}
        open={openModal}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.modalContent}>
            <EditForm
              cardInfo={editCard}
              onClickAfterSubmit={onClose}
              initialValues={{
                name: editCard.name,
                phone: editCard.phone,
                email: editCard.email,
              }}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default memo(withStyles(styles)(CardList));
