"use client"

export default function moveCard(slider) {
  let lastItem = null;

  if (slider) {
      lastItem = slider.querySelector(".item:last-child");
  }

  if (slider && lastItem) {
      lastItem.style.display = "none"; // Hide the last item
      const newItem = document.createElement("div");
      newItem.className = lastItem.className; // Set the same class name
      // Find the image inside the last item
      const imageElement = lastItem.querySelector("img");
      if (imageElement) {
          // Clone the image element to retain all attributes and events
          const newImage = imageElement.cloneNode(true);
          newItem.appendChild(newImage); // Append the image as a child to the new item
      }
      slider.insertBefore(newItem, slider.firstChild); // Insert the new item at the beginning of the slider
  }
}
