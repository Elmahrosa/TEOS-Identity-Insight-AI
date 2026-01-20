  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new URLSearchParams();
    form.append("username", loginData.username);
    form.append("password", loginData.password);

    try {
      const res = await fetch("http://localhost:8000/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: form.toString()
      });

      if (!res.ok) {
        alert("Access Denied: Check Username/Password");
        return;
      }

      const data = await res.json();
      localStorage.setItem("token", data.access_token);
      setToken(data.access_token);
      addLog("Architect Authenticated");
    } catch (err) {
      alert("System Offline: Ensure Backend is Running");
    }
  };
