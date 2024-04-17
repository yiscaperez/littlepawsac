    // Read the login file
    fs.readFile('login.txt', 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return res.status(500).send("Error reading user data.");
        }

        // Check if username already exists
        const users = data.split(' '); // Assuming space-separated values
        const exists = users.some(user => user.split(':')[0] === username);

        if (exists) {
            res.send("Username already exists. Please choose another.");
        } else {
            // If not exists, append new user to the file
            const newUser = `${username}:${password}`;
            fs.appendFile('login.txt', ` ${newUser}`, (err) => {
                if (err) {
                    console.error("Error writing to file:", err);
                    return res.status(500).send("Failed to create new user.");
                }
                res.send("Account successfully created. You can now login.");
            });
        }
    });
