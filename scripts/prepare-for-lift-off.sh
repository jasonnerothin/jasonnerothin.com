#!/bin/bash
find scripts -type f -name "*test*" -exec rm {} \;
find . -type d -name "*test*" -exec rm -rf {} \;
find . -type f -name "*.iml" -exec rm {} \;
find . -name "*git*" -exec rm -rf {} \;
rm -rf scripts/private
rm -rf config README.md .idea
