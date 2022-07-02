import { Link } from 'react-router-dom';
import { ReactComponent as DeleteIcon } from '../assets/svg/deleteIcon.svg';
import { ReactComponent as EditIcon } from '../assets/svg/editIcon.svg';
import bedIcon from '../assets/svg/bedIcon.svg';
import bathtubIcon from '../assets/svg/bathtubIcon.svg';

function ListingItem({ listing, id, onEdit, onDelete }) {

  // show rooms and number
  const showNumbersRoom = room => {
    return listing[room] > 1
      ? listing[room] + ` ${ room.charAt(0).toUpperCase() + room.slice(1) }`
      : `1 ${ room.slice(0, -1) }`;
  };

  // show price
  const showPriceOffer = typePrice => {
    return listing[typePrice]
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <li className="categoryListing">
      <Link
        to={ `/category/${ listing.type }/${ id }` }
        className="categoryListingLink"
      >
        <img
          src={ listing.imgUrls[0] }
          alt={ listing.name }
          className="categoryListingImg"
        />
        <div className="categoryListingDetails">
          <p className="categoryListingLocation">{ listing.location }</p>
          <p className="categoryListingName">{ listing.name }</p>

          <p className="categoryListingPrice">
            ${ listing.offer
                ? showPriceOffer('discountedPrice')
                : showPriceOffer('regularPrice')
            }
            {
              listing.type === 'rent' && ' / Month'
            }
          </p>
          <div className="categoryListingInfoDiv">
            <img src={ bedIcon } alt="bed" />
            <p className="categoryListingInfoText">
              {
                showNumbersRoom('bedrooms')
              }
            </p>
            <img src={ bathtubIcon } alt="bath" />
            <p className="categoryListingInfoText">
              {
                showNumbersRoom('bathrooms')
              }
            </p>
          </div>
        </div>
      </Link>

      {
        onDelete && (
          <DeleteIcon
            className="removeIcon"
            fill="rgb(231, 76,60)"
            onClick={ () => onDelete(listing.id, listing.name) }
          />
        )
      }

      {
        onEdit && <EditIcon className="editIcon" onClick={ () => onEdit(id) } />
      }
    </li>
  );
}

export default ListingItem;