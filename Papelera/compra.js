/*async limiter(id: number, idMovie: number) {
    const userX = await users.findAll({ where: { id } });
    let limi = userX[0].limiter;
    let rta;
    if (userX[0].category === "silver") {
      if (limi === "" || limi === null) {
        limi = idMovie.toString();
        await users.update({ limiter: limi }, { where: { id } });
      } else {
        rta = limi + "," + idMovie;
        let rta2 = rta.split(",");
        console.log(rta2, "aca rta");
        let rta4 = Number(rta2)
        let rta3 = rta4 === idMovie;
        console.log(rta3, "aca rta3");
        if (rta3 === false) {
          await users.update({ limiter: rta }, { where: { id } });
          let result = limi.split(",");
          if (result.length > 6) {
            throw new Error();
          }
          const userX1 = await users.findAll({ where: { id } });
          return userX1[0];
        } else {
          console.log("ya existe");
        }
      }
      return userX[0];
    } else {
      const userx = users.findAll({ where: { id } });
      console.log(`Hey ${userX} Your plan expired`);
    }
  }*/