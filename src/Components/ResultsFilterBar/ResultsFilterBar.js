import "./ResultsFilterBar.css";
import locationIcon from "../../Images/location.svg";
import calendarIcon from "../../Images/calendar.svg";
import musicIcon from "../../Images/music.svg";
import amenitiesIcon from "../../Images/amenities.svg";
import filterIcon from "../../Images/filter.svg";
import Option from "../FilterSelections/FilterSelections";
import {
  instrumentAvailableOptions,
  amenitiesAvailableOptions,
  sortOptions,
} from "../../Utils/filterOptions";
import ReactSelect from "react-select";

const ResultsFilterBar = ({
  date,
  setDate,
  availableInstruments,
  onAvailableInstrumentsChange,
  availableAmenities,
  onAvailableAmenitiesChange,
  sortSelect,
  onSortChange,
}) => {
  return (
    <div className="filter-bar">
      <div className="filter-section">
        <img src={locationIcon} alt="location" className="filter-icon" />
        <div className="filter-location">
          <div className="filter-title">Place:</div>
          <div className="filter-location-value">Denver, CO</div>
        </div>
      </div>
      <div className="filter-section">
        <img src={calendarIcon} alt="location" className="filter-icon" />
        <div className="filter-date">
          <div className="filter-title">
            <label htmlFor="date">Select a date:</label>
          </div>
          <input
            type="date"
            id="date"
            min={new Date(new Date().toLocaleDateString()).toJSON().slice(0, 10)}
            className="filter-title"
            value={date.slice(0, 10)}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
      </div>
      <div className="filter-section">
        <img src={musicIcon} alt="location" className="filter-icon" />
        <div className="filter-instruments">
          <div className="filter-title">
            <label htmlFor="instruments-available">Instruments Available:</label>
          </div>
          <ReactSelect
            id="instruments-available"
            className="checkbox-dropdown"
            options={instrumentAvailableOptions}
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            components={{ Option }}
            onChange={onAvailableInstrumentsChange}
            allowSelectAll={true}
            value={availableInstruments}
          />
        </div>
      </div>
      <div className="filter-section">
        <img src={amenitiesIcon} alt="location" className="filter-icon" />
        <div className="filter-amenities">
          <div className="filter-title">
            <label htmlFor="amenities-available">Amenities Available:</label>
          </div>
          <ReactSelect
            id="amenities-available"
            className="checkbox-dropdown"
            options={amenitiesAvailableOptions}
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            components={{ Option }}
            onChange={onAvailableAmenitiesChange}
            allowSelectAll={true}
            value={availableAmenities}
          />

        </div>
      </div>
      <div className="filter-section">
        <img src={filterIcon} alt="location" className="filter-icon" />
        <div className="filter-sort">
          <div className="filter-title">
          <label htmlFor="sort-by-price">Sort By:</label>
          </div>
          <ReactSelect
            id="sort-by-price"
            className="checkbox-dropdown"
            options={sortOptions}
            closeMenuOnSelect={true}
            hideSelectedOptions={false}
            components={{ Option }}
            onChange={onSortChange}
            allowSelectAll={false}
            value={sortSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default ResultsFilterBar;
