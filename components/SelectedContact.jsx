import { useState } from "react";
import { useEffect } from "react";

export default function SelectedContact({
  selectedContact,
  setSelectedContact,
}) {
  const [contact, setContact] = useState("null");

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(
          `https://jsonplace-univclone.herokuapp.com/users/${selectedContactId}`
        );
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    };

    if (selectedContactId) {
      fetchContact();
    } else {
      setContact(null);
    }
  }, [selectedContactId]);
}
