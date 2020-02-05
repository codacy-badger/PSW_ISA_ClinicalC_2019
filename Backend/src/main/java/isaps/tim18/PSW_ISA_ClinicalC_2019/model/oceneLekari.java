package isaps.tim18.PSW_ISA_ClinicalC_2019.model;

import javax.persistence.*;

@Entity
public class oceneLekari {

    @EmbeddedId
    oceneLekariKljuc id;

    @ManyToOne
    @MapsId("pacijent_id")
    @JoinColumn(name="pacijent_id")
    Pacijent pacijent;

    @ManyToOne
    @MapsId("lekar_id")
    @JoinColumn(name="lekar_id")
    Lekar lekar;

    int ocena;

    public oceneLekariKljuc getId() {
        return id;
    }

    public void setId(oceneLekariKljuc id) {
        this.id = id;
    }

    public Pacijent getPacijent() {
        return pacijent;
    }

    public void setPacijent(Pacijent pacijent) {
        this.pacijent = pacijent;
    }

    public Lekar getLekar() {
        return lekar;
    }

    public void setLekar(Lekar lekar) {
        this.lekar = lekar;
    }

    public int getOcena() {
        return ocena;
    }

    public void setOcena(int ocena) {
        this.ocena = ocena;
    }

    public oceneLekari() {
    }

    public oceneLekari(oceneLekariKljuc id, Pacijent pacijent, Lekar lekar, int ocena) {
        this.id = id;
        this.pacijent = pacijent;
        this.lekar = lekar;
        this.ocena = ocena;
    }
}
