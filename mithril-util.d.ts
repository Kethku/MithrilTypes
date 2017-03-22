/**
* This is the base interface for property getter-setters
*
* @see m.prop
*/
interface Property<T> {
	/**
	* Gets the contained value.
	*
	* @return The contained value.
	*/
  (): T;

	/**
	* Sets the contained value.
	*
	* @param value The new value to set.
	* @return The newly set value.
	*/
  (value: T): T;
}

/*
 * This represents a non-promise getter-setter functions.
 *
 * @see m.prop which returns objects that implement this interface.
 */
interface BasicProperty<T> extends Property<T> {
  /**
   * Makes this serializable to JSON.
   */
  toJSON(): T;
}
