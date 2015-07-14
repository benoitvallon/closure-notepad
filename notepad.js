'use strict';

// it is equivalent to this:
// tutorial = tutorial || {};
// tutorial.notepad = tutorial.notepad || {};
// tutorial.notepad.Note = tutorial.notepad.Note || {};
goog.provide('tutorial.notepad');
goog.provide('tutorial.notepad.Note');

// require(s)
goog.require('goog.dom');
goog.require('goog.ui.Zippy');

/**
 * Iterates over a list of note data objects, creates a Note instance
 * for each one, and tells the instance to build its DOM structure.
 */
tutorial.notepad.makeNotes = function(data, noteContainer) {
  var notes = [];
  for (var i = 0; i < data.length; i++) {
    var note =
      new tutorial.notepad.Note(data[i].title, data[i].content, noteContainer);
    notes.push(note);
    note.makeNoteDom();
  }
  return notes;
};

/**
 * Manages the data and interface for a single note.
 */
tutorial.notepad.Note = function(title, content, noteContainer) {
  this.title = title;
  this.content = content;
  this.parent = noteContainer;
};

/**
 * Creates the DOM structure for the note and adds it to the document.
 */
tutorial.notepad.Note.prototype.makeNoteDom = function() {
  // Create DOM structure to represent the note.
  this.headerElement = goog.dom.createDom('div',
      {'style': 'background-color:#EEE'}, this.title);
  this.contentElement = goog.dom.createDom('div', null, this.content);
  var newNote = goog.dom.createDom('div', null,
      this.headerElement, this.contentElement);

  // Add the note's DOM structure to the document.
  goog.dom.appendChild(this.parent, newNote);
  return new goog.ui.Zippy(this.headerElement, this.contentElement);
};
