package isaps.tim18.PSW_ISA_ClinicalC_2019.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.beans.factory.annotation.Value;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Entity
@Table(name="zkarton")
public class ZdravstveniKarton {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="pacijent_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Pacijent pacijent;

    @ElementCollection
    private List<Dijagnoze> dijagnoze=new ArrayList<Dijagnoze>();

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.DETACH)
    @JoinTable(name = "zkartoni_opsti_izvestaji", joinColumns = @JoinColumn(name = "zkarton"),
            inverseJoinColumns = @JoinColumn(name = "opsti_izvestaj_id"))
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private OpstiIzvestaj opstiIzvestaj;

    public ZdravstveniKarton(){

    }

    public ZdravstveniKarton(Pacijent pacijent, List<Dijagnoze> dijagnoze, OpstiIzvestaj opstiIzvestaj) {
        this.pacijent = pacijent;
        this.dijagnoze = dijagnoze;
        this.opstiIzvestaj = opstiIzvestaj;
    }

    public Long getId() {
        return id;
    }

    public Pacijent getPacijent() {
        return pacijent;
    }

    public void setPacijent(Pacijent pacijent) {
        this.pacijent = pacijent;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Dijagnoze> getDijagnoze() {
        return dijagnoze;
    }

    public void setDijagnoze(List<Dijagnoze> dijagnoze) {
        this.dijagnoze = dijagnoze;
    }

    public OpstiIzvestaj getOpstiIzvestaj() {
        return opstiIzvestaj;
    }

    public void setOpstiIzvestaj(OpstiIzvestaj opstiIzvestaj) {
        this.opstiIzvestaj = opstiIzvestaj;
    }
}
