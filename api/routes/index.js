const r_agentravel = require('./r_agentravel');
const r_agentraveldetail = require('./r_agentraveldetail');
const r_fotodetaillokasi = require('./r_fotodetaillokasi');
const r_hotel = require('./r_hotel');
const r_jnspaketperjalanan = require('./r_jnspaketperjalanan');
const r_kategoriwisata = require('./r_kategoriwisata');
const r_klpperjalanan = require('./r_klpperjalanan');
const r_klpuserpengelola = require('./r_klpuserpengelola');
const r_klpuserpengguna = require('./r_klpuserpengguna');
const r_kota = require('./r_kota');
const r_lokasiwisata = require('./r_lokasiwisata');
const r_maskapaipenerbangan = require('./r_maskapaipenerbangan');
const r_metodebayar = require('./r_metodebayar');
const r_orderpaketwisata = require('./r_orderpaketwisata');
const r_paketperjalanan = require('./r_paketperjalanan');
const r_paketperjalanandetail = require('./r_paketperjalanandetail');
const r_propinsi = require('./r_propinsi');
const r_tripwisataperhari= require('./r_tripwisataperhari');
const r_userpengelola = require('./r_user_pengelola');
const r_userpengguna = require('./r_user_pengguna');

module.exports = (app) => {
    app.get('/', (req, res) => res.status(200).send({
            message: 'Welcome to the travellingQu API!',
        })
    );

    app.get('/test', (req, res) => res.status(200).send("Welcome to the travellingQu API!"));

    app.use("/agen_travel", r_agentravel);
    
    app.use("/agentravel_detail", r_agentraveldetail);

    app.use("/foto_lokasi", r_fotodetaillokasi);
    
    app.use("/hotel", r_hotel);

    app.use("/jns_paketperjalanan", r_jnspaketperjalanan);

    app.use("/kategori_wisata", r_kategoriwisata);
    
    app.use("/klp_perjalanan", r_klpperjalanan);
    
    app.use("/klpuser_pengelola", r_klpuserpengelola);
    
    app.use("/klpuser_pengguna", r_klpuserpengguna);
    
    app.use("/kota", r_kota);

    app.use("/lokasi_wisata", r_lokasiwisata);

    app.use("/maskapai_penerbangan", r_maskapaipenerbangan);

    app.use("/metode_bayar", r_metodebayar);

    app.use("/order_paketwisata", r_orderpaketwisata);

    app.use("/paket_perjalanan", r_paketperjalanan);

    app.use("/paketperjalanan_detail", r_paketperjalanandetail);

    app.use("/propinsi", r_propinsi);

    app.use("/tripwisataperhari", r_tripwisataperhari);
    
    app.use("/user_pengelola", r_userpengelola);
    
    app.use("/user_pengguna", r_userpengguna);
};