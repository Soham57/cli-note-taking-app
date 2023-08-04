#!/usr/bin/env node

const note = process.argv[2];
const newNode = {
  content: note,
  id: Date.now(),
};
